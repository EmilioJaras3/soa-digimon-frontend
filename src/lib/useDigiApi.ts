import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { DigiApiResponse } from './types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://34.225.231.69:3001';

export function useDigiApi(endpoint: string) {
    const [data, setData] = useState<DigiApiResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`${API_BASE_URL}${endpoint}`);
            setData(response.data);
        } catch (err: any) {
            setError(err.response?.data?.error || err.message || 'Error connecting to the server');
        } finally {
            setLoading(false);
        }
    }, [endpoint]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, loading, error, refetch: fetchData };
}
