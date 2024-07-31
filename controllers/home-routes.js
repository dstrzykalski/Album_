const router = require('express').Router();
const {All} = require('../../models/all');

router.get('/', async (req, res) => {
    const allData = await All.findAll().catch((err) => {
        res.json(err);
    });
    const alls = allData.map((all) => all.get({ plain: true }));
    res.render('all', { alls });
}
);

module.exports = router;
