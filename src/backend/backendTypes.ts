export enum ServerErrorCode {
  InvalidAPIToken = "1000",
  SubscriberIDNotFound = "1001",
  InstallationIDNotFound = "1002",
  StoreTypeNotFound = "1003",
  WrongStoreType = "1004",
  GenericError = "1005",
  InvalidAppID = "1006",
  Unauthorized = "1007",
  ProductIDNotFound = "1008",
  AppIDNotFound = "1009",
  InvalidParameter = "1010",
  AppleReceiptStatusError = "1011",
  InvalidFieldValueError = "1012",
  InvalidFieldNameError = "1013",
}

export enum ServerStatus {
  OK = 200,
  Created = 201,
  NoContent = 204,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  ServiceUnavailable = 503,
}

interface ResponseError {
  code: ServerErrorCode;
  description: string;
}

export interface BaseResponse {
  error?: ResponseError;
  status: ServerStatus;
}

export interface Article {
  userid: string;
  topic: string;
  url: string;
  content: string;
  metaTitle: string;
  metaDescription: string;
  metaHeroImage: string;
  note: string;
  date: number;
  tags: string[];
  isDeleted: boolean;
  updatedAt: number;
  linkId: string;
}

export interface ArticleCompact {
  linkId: string;
  topic: string;
  url: string;
  metaTitle: string;
  metaDescription: string;
  metaHeroImage: string;
  date: number;
  tags: string[];
  isDeleted: boolean;
  updatedAt: number;
}

export interface ArticleContent {
  content: string;
  linkId: string;
  metaDescription: string;
  note: string;
}

export interface ArticleSearch {
  content: string;
  date: number;
  isDeleted: boolean;
  linkId: string;
  note: string;
  tags: string[];
  topic: string;
  updatedAt: number;
  url: string;
}

export interface Exercise {
  id: string;
  title: string;
  smallDescription: string;
  upperBoundDuration: number;
  lowerBoundDuration: number;
  imageUrl: string;
  detailsUrl: string;
}

export interface SimpleResponse extends BaseResponse {
  data: string;
}

export interface AllExercisesResponse extends BaseResponse {
  exercises: Exercise[];
}

export type GetAllExercisesResponse = AllExercisesResponse;
