const Ticket = require('../models/ticket');

module.exports = {
    new: showNewTicketForm,
    create,
};

function showNewTicketForm(req, res) {
    const flight = req.params.id;
    res.render('tickets/new', { title: 'Add Ticket', flight });
    }

function create(req, res) {
    //create new ticket
    const ticket = new Ticket(req.body);
    ticket.flight = req.params.id
    ticket.save(function(err) {
      if (err) return res.redirect(`/flights/${ticket.flight}/tickets`);
      res.redirect(`/flights/${ticket.flight}`);
    });
}
