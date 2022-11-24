import axios from "axios";

export async function newGame(
  payload: {
    id: string;
    name: string;
  },
  setUser: any
): Promise<any> {
  const response = await axios.post(
    `https://casinoserver-production.up.railway.app/game/newGame`,
    payload
  );

  setUser(response.data);
}

export async function spin(user: { id: string }, setResult: any, setUser: any) {
  const { id } = user;
  const { data } = await axios.get(
    `https://casinoserver-production.up.railway.app/game/play/${id}`
  );

  setResult(data.playResults);
  setUser(data.player);
}

export async function buy(user: { id: string }, setUser: any) {
  const { id } = user;
  const { data } = await axios.get(
    `https://casinoserver-production.up.railway.app/game/buy/${id}`
  );

  setUser(data.player);
}

export async function checkout(id: string) {
  const response = await axios.get(
    `https://casinoserver-production.up.railway.app/game/checkout/${id}`
  );
  return response.data;
}
