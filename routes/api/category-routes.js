const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
    Category.findAll({
      attributes: ['id', 'category_name'],
      // include products
      include: {
        model: Product,
        attributes: ['product_name', 'price', 'stock']
      }
    })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err); 
    });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'category_name'],
    // include products
    include: {
      model: Product, 
      attributes: ['product_name', 'price', 'stock']
    }
  })
  .then(dbCategoryData => {
    if(!dbCategoryData) {
      res.status(404).json({ message: `No categories associated with id - ${req.params.id}` });
      return;
    }
    res.json(dbCategoryData); 
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err); 
  });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status(400).json(err); 
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  // Inputting req.body as an arguement to update as all key value pairs should be provided to update the category id. Especially since each category only has a category_name key to update. 
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(dbCategoryData => {
    // Checks to see if dbCategoryData[0] = 0 , which will register as false. If succesful, dbCategoryData returns 1 which means true! Or why? 
    if(!dbCategoryData[0]) {
      res.status(404).json({ message: `No categories associated with id - ${req.params.id}` });
      return; 
    }
    res.json(dbCategoryData); 
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err); 
  });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbCategoryData => {
    if(!dbCategoryData) {
      res.status(404).json({ message: `No categories associated with id - ${req.params.id}` });
      return;
    }
    res.json(dbCategoryData); 
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err); 
  });
});

module.exports = router;
