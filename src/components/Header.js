import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "store/User/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "utils/constants";
import { toggleGptSearchView } from "store/GptSearch/gptSlice";
import { changeLanguage } from "store/AppConfig/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex flex-col md:flex-row justify-between">
      <img src={LOGO} alt="logo" className="w-40 mx-auto md:mx-0" />
      {user && (
        <div className="flex p-2 justify-between">
          {showGptSearch && (
            <select
              className="py-2 px-4 my-2 mx-4 bg-gray-900 text-white font-bold"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptSearchClick}
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
          >
            {!showGptSearch ? "GPT Search" : "Homepage"}
          </button>
          <img
            src={user?.photoURL}
            alt="userIcon"
            className="hidden md:inline-block w-12 h-12"
          />
          <button onClick={handleSignOut} className="text-white font-bold p-2">
            Sign out of Netflix
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
