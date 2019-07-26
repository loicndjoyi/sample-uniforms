import {
    AutoForm
} from 'uniforms-bootstrap4';
import React from 'react';
import GuestSchema from './GuestSchema';
export default function GuestForm() {
    return <AutoForm schema = {
        GuestSchema
    }
    onSubmit = {
        console.log
    }
    />;
}