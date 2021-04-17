import { Typography, NativeSelect } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Countries = () => {
    const [country, setCountry] = useContext(UserContext);
    const [countries,setCountries] = useState([]);
    
    useEffect(() => {
        fetch('https://covid19.mathdro.id/api/countries')
        .then(res => res.json())
        .then(data => setCountries(data.countries))
    },[])
    return (
        <>
        <Typography style={{marginBottom: 20}} variant="h5">Reported Cases or deaths by countries or territory</Typography>
        <NativeSelect>
            <option value="">United States</option>
            {
                countries.map((country , i) => <option key={i} value={country.name}>{country.name}</option>)
            }
        </NativeSelect>
        </>
    );
};

export default Countries;