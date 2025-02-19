import jwt from "jsonwebtoken";  // checking token ----

const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {     // if token not exist 
            return res.status(401).json({
                message: "User not authenticated",
                success: false,
            })
        }
        // if exist,then try to decode ---
        const decode = await jwt.verify(token, process.env.SECRET_KEY);
        if(!decode){
            return res.status(401).json({
                message:"Invalid token",
                success:false
            })
        };
        req.id = decode.userId;  // taking id from token
        next();
    } catch (error) {
        console.log(error);
    }
}
export default isAuthenticated;