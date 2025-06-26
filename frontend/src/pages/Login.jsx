import { assets } from "../assets/assets"

const Login = ({ setloginpage }) => {

    return (
        <div className="absolute top-0 bottom-0 left-0 right-0  backdrop-blur-sm flex items-center justify-center">

            <div>

                <div>
                    <button>
                        Login
                    </button>

                    <button>
                        Sign up
                    </button>

                    <div>
                        <img src={assets.cross_icon} alt="" onClick={() => setloginpage(false)} />
                    </div>
                </div>
                <div>

                </div>

            </div>

        </div>
    )
}

export default Login