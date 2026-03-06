'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { DigiApiResponse } from './types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001';

export function useDigiApi(endpoint: string) {
    const [data, setData] = useState<DigiApiResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`${API_BASE_URL}${endpoint}`);
            setData(response.data);
        } catch (err: any) {
            console.error('API Error:', err);
            setError(err.response?.data?.error || err.message || 'Error de conexión con el servidor');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [endpoint]);

    return { data, loading, error, refetch: fetchData };
}
