import type { NextApiRequest, NextApiResponse } from 'next'
import { supabaseClient } from '../../../../services/supabase'
import NextCors from 'nextjs-cors';
import PlaceCardType from '../../../../interfaces/PlaceCardType';

type ResponseDataType = {
    data: PlaceCardType[],
    message: string;
    error?: any;
};

type ErrorDataType = {
    body: string;
};



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseDataType | ErrorDataType>
) {
    await NextCors(req, res, {
        // Options
        methods: ['GET'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });
    
    if (req.method !== 'GET') {
        res.status(405).json({ body: 'Method Not Allowed' })
        return;
    }

    try {
        const { data: places, error } = await supabaseClient
            .from(process.env.NEXT_PUBLIC_SUPABASE_TABLE!)
            .select("*").order('mainTitle', { ascending: true })

        // console.log(allPartners)
        if (error || places == null) throw error

        res.status(200).json({
            data: places, message: "Places selected successfully!",
        });
        res.end()
        return

    } catch (error) {
        res.status(500).json({
            data: [],
            message: "Error while getting data!",
            error: error,
        });
        res.end()
        return;
    }

}
