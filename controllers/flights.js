const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    new: newFlight,
    create,
    show,
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {title: 'All Flights', flights});
    });
}

function newFlight(req, res) {
    res.render('flights/new', { title: 'Add Flight' });
}

function create(req, res) {
    // Delete empty properties on req.body for defaults to happen 
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
    // Create data
    const flight = new Flight(req.body);
    flight.save(function(err) {
      if (err) return res.redirect('/flights/new');
      console.log(flight);
      res.redirect('/flights');
    });
  }

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        console.log(flight);
        Ticket.find({flight: flight._id}, function(err, tickets) {
            res.render('flights/show', { title: 'Flight Details', flight, tickets });
        })
    });
};
