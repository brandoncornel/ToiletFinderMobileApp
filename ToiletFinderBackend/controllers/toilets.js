import Toilet from '../models/toilet.js';


export const list = (req, res) => {
  Toilet.find( (err,toilets) => res.json(toilets));
};

export const add = (req, res) => {

  var toilet = new Toilet({
    name: req.body.name,
    	gender: req.body.gender,
    	cleanliness_level: req.body.cleanliness_level,
    	ply_number: req.body.ply_number,
    	number_bathroom_stalls: req.body.number_bathroom_stalls,
    	notes: req.body.notes,
    	location: req.body.location

  });

  toilet.save( (err, toilet)=>{
    if(err){
      return res.status(500).json({
                    message: 'Error saving car',
                    error: err
                });
    }
    return res.json({
                message: 'saved',
                _id: toilet._id
              });
});

}
