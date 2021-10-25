echo "RUNNING API FOR AUTOCOMPLETE BRANCH 'BANG' with LIMIT 10 OFFSET 0" &&
printf "\n" &&
curl -X GET -H "Content-Type: application/json" -H "Accept: application/json" "https://indian-bank-server.herokuapp.com/api/branches/autocomplete/?q=bang&limit=10" &&
printf "\n\n\n\n\n"
printf "======================================"
printf "\n\n\n\n\n"
echo "RUNNING API FOR SEARCHING IN ALL COLUMNS AND ROW WITH WORD 'KANPUR' with LIMIT 5 OFFSET 10"
printf "\n" &&
curl -X GET -H "Content-Type: application/json" -H "Accept: application/json" "https://indian-bank-server.herokuapp.com/api/branches/?q=KANPUR&limit=5&offset=10"
printf "\n\n\n\n\n"
