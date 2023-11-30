import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserById } from "../../JS/actions/userAction";
import { Link } from "react-router-dom";

const Profile = () => {
  const user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();
  const Id = useParams();

  useEffect(() => {
    dispatch(getUserById(Id.id));
    return () => {};
  }, [dispatch,Id.id]);
  const { name, email, phone } = user;
  return (
    <>
      <Link to="/">  <button>Retour</button> </Link>
      <br />
      <img
        src={require("../../assets/img/img-user.png")}
        alt="user "
        className="img-profile"
      />
      <h3 className="name-label">{name}</h3>
      <h3 className="email-label">{email}</h3>
      <span className="adress-label">{phone}</span>
    </>
  );
};


export default Profile;
