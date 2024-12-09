import { FaGoogle, FaGithub } from "react-icons/fa";


const SocialLogIn = () => {
  return (
    <div>
      <h2 className='font-semibold mb-5'>Login with</h2>
      <div className="flex flex-col gap-3">
        <button className="btn btn-outline btn-info"><FaGoogle /> Login With Google</button>
        <button className="btn btn-outline"><FaGithub /> Login with Github</button>
      </div>
    </div>
  );
};

export default SocialLogIn;