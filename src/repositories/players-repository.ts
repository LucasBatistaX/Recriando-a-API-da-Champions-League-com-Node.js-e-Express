import { StatisticsModel } from './../models/statistics-model';
import { PlayerModel } from "../models/player-model"

const database: PlayerModel[] = [
{
    id: 1,
    name: "Lionel Messi",
    club: "Paris Saint-Germain",
    nationality: "Argentina",
    position: "Forward",
    statistics: {
      Overall: 93,
      Pace: 85,
      Shooting: 94,
      Passing: 91,
      Dribbling: 95,
      Defending: 38,
      Physical: 65,
    }
  },
   {
    id: 2,
    name: "Luis Suárez",
    club: "Inter Miami",
    nationality: "Uruguay",
    position: "Forward",
    statistics: {
      Overall: 82,
      Pace: 64,
      Shooting: 85,
      Passing: 78,
      Dribbling: 77,
      Defending: 41,
      Physical: 75,
    },
  },
  {
    id: 3,
    name: "Sergio Busquets",
    club: "Inter Miami",
    nationality: "Spain",
    position: "Midfielder",
    statistics: {
      Overall: 81,
      Pace: 37,
      Shooting: 61,
      Passing: 77,
      Dribbling: 78,
      Defending: 78,
      Physical: 73,
    },
  },
  {
    id: 4,
    name: "Jordi Alba",
    club: "Inter Miami",
    nationality: "Spain",
    position: "Defender",
    statistics: {
      Overall: 80,
      Pace: 82,
      Shooting: 70,
      Passing: 80,
      Dribbling: 81,
      Defending: 72,
      Physical: 69,
    },
  },
  {
    id: 5,
    name: "Drake Callender",
    club: "Inter Miami",
    nationality: "USA",
    position: "Goalkeeper",
    statistics: {
      Overall: 75,
      Pace: 0,
      Shooting: 0,
      Passing: 60,
      Dribbling: 0,
      Defending: 0,
      Physical: 70,
    },
  },
  {
    id: 6,
    name: "Óscar Ustari",
    club: "Inter Miami",
    nationality: "Argentina",
    position: "Goalkeeper",
    statistics: {
      Overall: 73,
      Pace: 0,
      Shooting: 0,
      Passing: 58,
      Dribbling: 0,
      Defending: 0,
      Physical: 68,
    },
  },
  {
    id: 7,
    name: "Tomás Avilés",
    club: "Inter Miami",
    nationality: "Argentina",
    position: "Defender",
    statistics: {
      Overall: 74,
      Pace: 72,
      Shooting: 62,
      Passing: 70,
      Dribbling: 74,
      Defending: 71,
      Physical: 77,
    },
  },
  {
    id: 8,
    name: "Gonzalo Luján",
    club: "Inter Miami",
    nationality: "Argentina",
    position: "Defender",
    statistics: {
      Overall: 73,
      Pace: 67,
      Shooting: 29,
      Passing: 45,
      Dribbling: 54,
      Defending: 72,
      Physical: 81,
    },
  },
  {
    id: 9,
    name: "Marcelo Weigandt",
    club: "Inter Miami",
    nationality: "Argentina",
    position: "Defender",
    statistics: {
      Overall: 73,
      Pace: 75,
      Shooting: 54,
      Passing: 68,
      Dribbling: 66,
      Defending: 70,
      Physical: 74,
    },
  },
  {
    id: 10,
    name: "Telasco Segovia",
    club: "Inter Miami",
    nationality: "Venezuela",
    position: "Midfielder",
    statistics: {
      Overall: 75,
      Pace: 79,
      Shooting: 76,
      Passing: 74,
      Dribbling: 77,
      Defending: 56,
      Physical: 59,
    },
  },
  {
    id: 11,
    name: "Federico Redondo",
    club: "Inter Miami",
    nationality: "Argentina",
    position: "Midfielder",
    statistics: {
      Overall: 74,
      Pace: 72,
      Shooting: 62,
      Passing: 70,
      Dribbling: 74,
      Defending: 71,
      Physical: 77,
    },
  },
  {
    id: 12,
    name: "Benjamin Cremaschi",
    club: "Inter Miami",
    nationality: "USA",
    position: "Midfielder",
    statistics: {
      Overall: 72,
      Pace: 66,
      Shooting: 63,
      Passing: 71,
      Dribbling: 70,
      Defending: 61,
      Physical: 76,
    },
  },
  {
    id: 13,
    name: "Yannick Bright",
    club: "Inter Miami",
    nationality: "Italy",
    position: "Midfielder",
    statistics: {
      Overall: 74,
      Pace: 72,
      Shooting: 62,
      Passing: 68,
      Dribbling: 74,
      Defending: 71,
      Physical: 77,
    },
},
]

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find(player => player.id === id)
}

export const insertPlayer = async (player: PlayerModel) =>{
  database.push(player)
}

export const deleteOnePlayer = async (id: number) => {
  const index = database.findIndex(p => p.id === id )

  if(index !== -1){
    database.splice(index, 1)

    return true
  }
  return false
}

export const findAndModifyPlayer = async (id: number, statistics: StatisticsModel): Promise<PlayerModel> => {
  //Encontrando o Player
  const playerIndex = database.findIndex(player => player.id === id)
  if(playerIndex === -1){
    database[playerIndex].statistics = statistics
  }
  return database[playerIndex]
}