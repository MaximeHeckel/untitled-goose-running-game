import { useState } from "react";
import { WorldProvider } from "koota/react";
import { ConnectionGate } from "@/components/ConnectionGate";
import { Lobby } from "@/components/Lobby";
import { Scene } from "@/components/Scene";
import { world } from "@/core/world";
import { SocketProvider } from "@/lib/socket-provider";

type GameParams = {
  playerName: string;
  gameId: string;
  playerId: string;
  playerCount: number;
};

export default function App() {
  const [gameParams, setGameParams] = useState<GameParams | null>(null);

  if (gameParams) {
    return (
      <WorldProvider world={world}>
        <SocketProvider>
          <ConnectionGate>
            <Scene
              playerName={gameParams.playerName}
              gameId={gameParams.gameId}
              playerId={gameParams.playerId}
              playerCount={gameParams.playerCount}
              onGameEnded={() => setGameParams(null)}
            />
          </ConnectionGate>
        </SocketProvider>
      </WorldProvider>
    );
  }

  return (
    <WorldProvider world={world}>
      <SocketProvider>
        <ConnectionGate>
          <Lobby onStartGame={(params) => setGameParams(params)} />
        </ConnectionGate>
      </SocketProvider>
    </WorldProvider>
  );
}
