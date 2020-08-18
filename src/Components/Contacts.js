import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

const Contacts = () => {
    return (
        <>
            <h1>Contacts page</h1>
            <Table>
                <thead>Name</thead>
                <thead>Company</thead>
                <thead>Position</thead>
                <thead>Email</thead>
                <thead>Phone</thead>
                <thead>LinkedIn Profile</thead>
            </Table>
        </>
    )
}

const mapStateToProps = () => {
    return (
        // Do something here
        null
    )
}

export default connect(mapStateToProps)(Contacts);