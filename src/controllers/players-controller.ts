import { StatisticsModel } from './../models/statistics-model';
import { HttpResponse } from './../models/http-response-model';
import {Request, Response } from "express";
import * as service from "../services/players-service";
import { noContent } from "../utils/http-helper";


export const getPlayer = async (req: Request, res: Response) => {
  //Este comando abaixo coleta o parametro requesto
  const httpResponse = await service.getPlayerService()
  //Este comando abaixo processa e gera o response.
  res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const getPlayerById = async (req: Request, res: Response) =>{
  //Este comando abaixo coleta o parametro request
  const id = parseInt(req.params.id)
  //Este comando abaixo processa e gera o response.
  const httpResponse = await service.getPlayerByIdService(id)
  res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const postPlayer = async (req: Request, res: Response) => {
  //Este comando abaixo coleta o parametro request
  const bodyValue = req.body
  //Este comando abaixo processa e gera o response.
  const httpResponse = await service.createPlayerService(bodyValue)

  //Esse bloco condicional verifica se o body esta vazio ou tem conteúdo.
  if(httpResponse){
    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
  
}

export const deletePlayer = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const httpResponse = await service.deletePlayerService(id)

  res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const updatePlayer = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const bodyValue: StatisticsModel = req.body
  const httpResponse = await service.updatePlayerService(id, bodyValue)
  res.status(httpResponse.statusCode).json(httpResponse.body)
}


