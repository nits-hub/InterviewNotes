import pandas as pd

df = pd.read_csv('dataCleaning/w3data.csv')
print(df)

new_df = df.dropna()

print(new_df.to_string())

new_df.dropna(inplace = True)
print(new_df.to_string())

