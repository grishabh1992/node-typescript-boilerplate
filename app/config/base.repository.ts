import mongoose = require('mongoose');
export class RepositoryBase<T extends mongoose.Document> {
    private _model: mongoose.Model<mongoose.Document>;

    constructor(schemaModel: mongoose.Model<mongoose.Document>) {
        this._model = schemaModel;
    }

    async create(item: T): Promise<T> {
        return await this._model.create(item).exec();
    }

    async retrieve(condition: { [key: string]: any }, projection: { [key: string]: any }, option: { [key: string]: any }) {
        return await this._model.find(condition, projection, option).exec();
    }

    async update(condition: { [key: string]: any }, item: T, option: { [key: string]: any }) {
        return await this._model.updateMany(condition, { $set: item }, option || {});
    }

    async updateWithoutSet(condition: { [key: string]: any }, item: { [key: string]: any }, option: { [key: string]: any }) {
        return await this._model.update(condition, item, option).exec();
    }

    async delete(condition: { [key: string]: any }) {
        return await this._model.remove(condition);
    }
}