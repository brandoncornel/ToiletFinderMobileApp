import mongoose, {Schema} from 'mongoose';

var ToiletSchema = new Schema({
    name: {type: String, required: true},
    gender: {type: String, required: true},
    cleanliness_level: {type: String, required: true},
    ply_number: {type: Number, required: true},
    number_bathroom_stalls: {type: Number, required: true},
    notes: {type: String, required: true},
    location: {type: [Number], required: true}, // [Long, Lat]
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
});

export default mongoose.model('toilet', ToiletSchema);
