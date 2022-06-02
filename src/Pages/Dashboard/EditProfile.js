import React, { useEffect, useState } from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const EditProfile = () => {
    const [authUser] = useAuthState(auth);
    console.log(authUser);
    const [updateProfile] = useUpdateProfile(auth);
    const [user, setUser] = useState({});
    console.log(user);

    useEffect(() => {
        fetch(`http://localhost:5000/user/${authUser?.email}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                email: `${authUser?.email}`,
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((response) => response.json())
            .then((json) => {
                setUser(json);
            });
    }, [authUser?.email]);

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        const image = data?.photoURL[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=91b616d548cac73f8a00e5135bc6d897`;
        console.log(url);
        if (data?.photoURL[0]) {
            fetch(url, {
                method: "POST",
                body: formData,
            })
                .then((res) => res.json())
                .then((result) => {
                    if (result.success) {
                        console.log(result);
                        const img = result.data.url;
                        const userInfo = {
                            displayName: data.displayName || authUser.displayName,
                            phoneNumber: data.phoneNumber || user?.phoneNumber || "N/A",
                            address: data.address || user?.address || "N/A",
                            photoURL:
                                img ||
                                "https://foxdogconsultants.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
                        };
                        console.log(userInfo);
                        fetch(
                            `http://localhost:5000/update/user/${authUser.email}`,
                            {
                                method: "PUT",
                                headers: {
                                    "Content-Type": "application/json",
                                    email: `${authUser?.email}`,
                                    authorization: `Bearer ${localStorage.getItem(
                                        "accessToken"
                                    )}`,
                                },
                                body: JSON.stringify(userInfo),
                            }
                        )
                            .then((response) => response.json())
                            .then((json) => {
                                console.log(json);
                                toast.success("Profile Updated Successfully");
                                updateProfile({
                                    displayName:
                                        data?.displayName || authUser?.displayName || "N/A",
                                    photoURL:
                                        img ||
                                        "https://foxdogconsultants.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
                                });
                                reset();
                            });
                    }
                });
        } else {
            const userInfo = {
                displayName: data?.displayName || authUser.displayName,
                phoneNumber: data?.phoneNumber || user?.phoneNumber || "N/A",
                address: data?.address || user?.address || "N/A",
                photoURL:
                    user?.photoURL ||
                    authUser?.photoURL ||
                    "https://foxdogconsultants.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
            };
            console.log(userInfo);
            fetch(
                `http://localhost:5000/update/user/${authUser.email}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        email: `${authUser?.email}`,
                        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                    },
                    body: JSON.stringify(userInfo),
                }
            )
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                    toast.success("Profile Updated Successfully");
                    updateProfile({
                        displayName: data?.displayName || authUser?.displayName || "N/A",
                        photoURL:
                            user?.photoURL ||
                            authUser?.photoURL ||
                            "https://foxdogconsultants.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
                    });
                    reset();
                });
        }
        console.log(data);
    };

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto justify-center items-center">
                <div className="card-body  text-center">
                    <h2 className="card-title font-bold text-2xl text-center uppercase">Add Your Bio</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input name='userName' value={authUser?.displayName} type="text" placeholder="Your userName" disabled className="my-2 input input-bordered input-warning w-full max-w-xs" />
                        <input name='email' value={authUser?.email} disabled type="email" placeholder="Your email" className="my-2 input input-bordered input-warning w-full max-w-xs" />
                        <input name='address' type="text" placeholder="address" className="my-2 input input-bordered input-warning w-full max-w-xs" />
                        <input name='phoneNumber' type="number" placeholder="Your Phone Number" className="my-2 input input-bordered input-warning w-full max-w-xs" />

                        <input name='photoURL' type="file" placeholder="Give Image URL" className="my-2 input w-full max-w-xs" />

                        <div className="card-actions justify-end">
                            <button type='submit' className="btn btn-primary my-2 w-full uppercase">save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;