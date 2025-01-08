import pandas as pd

def getDataframeSize(players: pd.DataFrame) -> List[int]:
    n_rows, n_columns = players.shape
    return [n_rows, n_columns]