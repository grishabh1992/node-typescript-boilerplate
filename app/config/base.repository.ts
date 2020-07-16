import mongoose = require('mongoose');
export class RepositoryBase<T extends mongoose.Document> {
    private _model: mongoose.Model<mongoose.Document>;

    constructor(schemaModel: mongoose.Model<mongoose.Document>) {
        this._model = schemaModel;
    }

    create(item: T, callback: (error: any, result: any) => void) {
        this._model.create(item, callback);
    }

    // retrieve(condition: { [key: string]: any }, projection: { [key: string]: any }, option: { [key: string]: any }, callback: (error: any, result: any) => void) {
    //     this._model.find(condition, projection, option || {}, callback)
    // }
    async retrieve(condition: { [key: string]: any }, projection: { [key: string]: any }, option: { [key: string]: any }) {
        return await this._model.find(condition, projection, option).exec();
    }

    findOne(condition: { [key: string]: any }, projection: { [key: string]: any }, option: { [key: string]: any }, callback: (error: any, result: any) => void) {
        this._model.findOne(condition, projection, option || {}, callback)
    }

    update(condition: { [key: string]: any }, item: T, option: { [key: string]: any }, callback: (error: any, result: any) => void) {
        this._model.updateMany(condition, { $set: item }, option || {}, callback);
    }

    // updateWithoutSet(condition: { [key: string]: any }, item: { [key: string]: any }, option: { [key: string]: any }, callback: (error: any, result: any) => void) {
    //     this._model.updateMany(condition, item, option || {}, callback);
    // }
    async updateWithoutSet(condition: { [key: string]: any }, item: { [key: string]: any }, option: { [key: string]: any }) {
        return await this._model.update(condition, item, option).exec();
    }


    updateOne(condition: { [key: string]: any }, item: T, option: { [key: string]: any }, callback: (error: any, result: any) => void) {
        this._model.findOneAndUpdate(condition, { $set: item }, option || {}, callback);
    }

    delete(condition: { [key: string]: any }, callback: (error: any, result: any) => void) {
        this._model.remove(condition, (err) => callback(err, null));
    }

    findOneAndRemove(condition: { [key: string]: any }, option: { [key: string]: any }, callback: (error: any, result: any) => void) {
        this._model.findOneAndRemove(condition, option, callback);
    }

    count(condition: { [key: string]: any }, option: { [key: string]: any }, callback: (error: any, result: any) => void) {
        this._model.countDocuments(condition || {}, callback)
    }
}