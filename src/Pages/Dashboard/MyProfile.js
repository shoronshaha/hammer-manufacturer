import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";


const MyProfile = () => {
    const [authUser] = useAuthState(auth);
    const [reload, setReload] = useState(false);

    const [user, setUser] = useState({});

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
    }, [authUser?.email, reload]);

    setTimeout(() => {
        setReload(!reload);
    }, 1000);

    const navigate = useNavigate();

    const handleEditProfile = () => {
        navigate("/edit-profile");
    };
    return (
        <div>
            <h1 className="md:text-3xl font-bold uppercase text-center my-2">My Profile</h1>
            <div class="flex flex-col w-full lg:flex-row justify-center md:mt-24">

                <div class="grid card  rounded-box place-items-center my-5">
                    <div class="avatar online">
                        <div class="w-24 rounded-full">
                            <img src={
                                user.photoURL
                                    ? user.photoURL
                                    : authUser?.photoURL
                                        ? authUser?.photoURL
                                        : "https://foxdogconsultants.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
                            } alt="userPhoto" />
                        </div>
                    </div>
                    <button onClick={handleEditProfile} class="btn btn-outline btn-primary uppercase my-3">Edit Profile</button>
                </div>
                <div class="divider lg:divider-horizontal"></div>
                <div class="grid card rounded-box place-items-center">
                    <p className="font-bold">Your Email:{authUser?.email}</p>
                    <p className="font-bold text-start">Your Name:   {authUser?.displayName
                        ? authUser?.displayName
                        : user?.displayName
                            ? user?.displayName
                            : "N/A"}</p>
                    <p className="font-bold">Your Address:{user?.address}</p>
                    <p className="font-bold">Phone Number:{user?.phoneNumber}</p>
                </div>
            </div>
        </div>
    )
};

export default MyProfile;