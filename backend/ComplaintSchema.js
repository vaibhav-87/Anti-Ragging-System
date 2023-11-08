const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    Date:{
        type: String,
        required: true
    },
    Location:{
        type: String,
        required: true
    },
    Description:{
        type: String,
        required: true
    },
    IncidentType:{
        type: String,
        required: true
    },
    SeverityOfIncident:{
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'pending'
    }
});

exports.Complaints = mongoose.model("Complaints", complaintSchema);
