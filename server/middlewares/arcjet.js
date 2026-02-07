import aj from '../config/arcjet.js';

const arcjetMiddleware = async (req, res, next) =>{
    try{
        const decision = await aj.protect(req,{requested: 1});

        if(decision.isDenied()){
            if(decision.reason.isRateLimit()) return res.status(429).json({message: "Rate Limit : Too many requests. Please try again later."});
            if(decision.reason.isBot()) return res.status(403).json({message: "Bot Detected!, Access denied for bots."});
            return res.status(403).json({message: "Access denied from arcjet"});
        }
        next();
    }catch(err){
        console.error("Arcjet middleware error:", err);
        return res.status(500).json({message: "Internal server error in Arcjet middleware."});
    }
};

export  default arcjetMiddleware;