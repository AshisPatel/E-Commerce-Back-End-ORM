const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({
    attributes: ['id', 'tag_name'],
    //include product data
    include: {
      model: Product,
      attributes: ['product_name', 'price', 'stock'],
      through: ProductTag,
      as: 'products'
    }
  })
  .then(dbTagData => res.status(200).json(dbTagData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err); 
  });
  
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'tag_name'],
    //include product data
    include: {
      model: Product,
      attributes: ['product_name', 'price', 'stock'],
      through: ProductTag,
      as: 'products'
    }
  })
  .then(dbTagData => {
    if(!dbTagData) {
      res.status(404).json({ message: `No tag associated with id - ${req.params.id}` });
    }
    res.status(200).json(dbTagData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err); 
  });
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  })
  .then(dbTagData => res.status(200).json(dbTagData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  // Follow notes & logic from category-routes
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(dbTagData => {
    if(!dbTagData[0]) {
      res.status(404).json({ message: `No tag associated with id - ${req.params.id} or new tag name is the same as the old tag name` });
      return; 
    }
    res.status(200).json(dbTagData); 
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err); 
  });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbTagData => {
    if(!dbTagData) {
      res.status(404).json({ message: `No tag associated with id - ${req.params.id}` });
      return;
    }
    res.status(200).json(dbTagData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err); 
  })
});

module.exports = router;
