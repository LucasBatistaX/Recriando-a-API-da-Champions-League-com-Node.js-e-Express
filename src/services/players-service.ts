import { StatisticsModel } from './../models/statistics-model';
import { PlayerModel } from "../models/player-model"
import * as PlayerRepository from "../repositories/players-repository"
import * as HttpResponse from "../utils/http-helper"

export const getPlayerService = async() =>{
  const data = await PlayerRepository.findAllPlayers()
  let response = null

  if(data){
  //Aguardo o status ser processado pelo http-helper.ts e guardo na variavel "response"
    response = await HttpResponse.ok(data) 
  }else{
    response = await HttpResponse.noContent()
  }

  return response
}


export const getPlayerByIdService = async(id: number)=> {
  //Pedir para o repositoris de dados
  const data = await PlayerRepository.findPlayerById(id)
  let response = null

  if(data){
    response = await HttpResponse.ok(data)
  }else{
    response = await HttpResponse.noContent()
  }

  return response
}


export const createPlayerService = async (player: PlayerModel) => {
    let response = null
  //Verificar se o objeto e vazio
  if(Object.keys(player).length === 0){
  //Chama a função de criar um player.
    await PlayerRepository.insertPlayer(player)
    response = await HttpResponse.created()
  }else{
    response = await HttpResponse.badRequest()
  }

  return response
}

export const deletePlayerService = async (id: number) => {
  let response = null
  const isDeleted = await PlayerRepository.deleteOnePlayer(id)
   
  if(isDeleted){
    response = await HttpResponse.ok({message: "Deleted"})
  }else{
    response = await HttpResponse.badRequest()
  }
  return response
  
}

export const updatePlayerService = async (id: number, statistics: StatisticsModel ) => {
  const data = await PlayerRepository.findAndModifyPlayer(id, statistics)
  let response = null

  if(Object.keys(data).length === 0){
    response = await HttpResponse.badRequest()
  }else{
  response = await HttpResponse.ok(data)
  }
  return response
}