import {rateLimit} from "express-rate-limit";


export const limiter = rateLimit({
    windowMs: 1* 60 * 1000, // 15 minutes
	limit: 60, 
	standardHeaders: 'draft-7', 
	legacyHeaders: false, 
	// store: ... , // Redis, Memcached, etc. See below.
})