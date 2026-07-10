import {getAuth, User} from '@clerk/express';

const protectedRoute = async (req, res, next) => {
    try {
        const {userId} = getAuth(req);
        if(!userId){
            return res.status(401).json({
                success: false,
                message: "Unauthorized"
            })
        }

        const user = await User.findOne({ clerkId: userId});
        if(!user){
            return res.status(404).json({
                success: false,
                message: "User profile is not synced yet"
            })
        }

        req.user = user;
        next();
    } catch (error) {
        console.log("protected auth error: ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

export default protectedRoute;