class APIFeatures {
  constructor(mongooseQuery, urlQueryString) {
    this.mongooseQuery = mongooseQuery;
    this.urlQueryString = urlQueryString;
  }

  filter() {
    // Url params: ...tours?difficulty=easy&duration[gte]=5
    // Express req.query format: {difficulty: 'easy', duration: {gte: 5 }}
    // MongoDb query format: {difficulty: 'easy', duration: {$gte: 5 }}
    const queryObj = { ...this.urlQueryString };
    const exludedFields = ['page', 'sort', 'limit', 'fields'];
    exludedFields.forEach((el) => delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    this.mongooseQuery = this.mongooseQuery.find(JSON.parse(queryStr));
    return this;
  }

  sort() {
    if (this.urlQueryString.sort) {
      // Url params: ...tours?sort=price
      this.mongooseQuery = this.mongooseQuery.sort(this.urlQueryString.sort);
    }
    return this;
  }

  limitFields() {
    if (this.urlQueryString.fields) {
      // Url params: ...tours?fileds=name,duration,difficulty
      // MongoDb query format:'name duration price'
      const fields = this.urlQueryString.fields.split(',').join(' ');
      this.mongooseQuery = this.mongooseQuery.select(fields);
    } else {
      // Exclude filed
      this.mongooseQuery = this.mongooseQuery.select('-__v');
    }
    return this;
  }

  paginate() {
    // Url params: ...tours?page=2&limit=8
    const page = this.urlQueryString.page * 1 || 1;
    const limit = this.urlQueryString.limit * 1 || 40;
    const skip = (page - 1) * limit;

    this.mongooseQuery = this.mongooseQuery.skip(skip).limit(limit);
    return this;
  }
}

module.exports = APIFeatures;
