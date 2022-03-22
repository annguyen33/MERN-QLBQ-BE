import { Request } from "express";
import { Document } from "mongoose";
export interface IUser extends Document {
  firstname: string;
  lastname: string;
  phone: string;
  office: string;
  email: string;
  password: string;
  role: string;
  active: boolean;
  _doc: object;
}

export interface INewUser {
  firstname: string;
  lastname: string;
  phone: string;
  office: string;
  email: string;
  password: string;
}

export interface IDecodedToken {
  id?: string;
  newUser?: INewUser;
  iat: number;
  exp: number;
}

export interface INutrition {
  _id: string;
  nutritionName: string;
  active: boolean;
}

interface INewNutrition {
  nutritionId: string;
  nutritionValue: number;
}

export interface IIngredient {
  _id: string;
  ingredientName: string;
  standardMass: number;
  nutritionDetail: INewNutrition[];
}

export interface IBase {
  _id: string;
  baseName: string;
  address: string;
}

export interface ITypeDish {
  _id: string;
  typeDishName: string;
}

export interface IDish {
  _id: string;
  dishName: string;
  englishName: string;
  image: string;
  MaLMA: string;
}

export interface IReqAuth extends Request {
  user?: IUser;
}
