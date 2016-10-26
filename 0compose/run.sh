#!/bin/bash
# https://github.com/vigneshwaranr/bd/blob/master/bd

arg='up -d'

while [[ $# -gt 1 ]]
do
key="$1"

case $key in
  -b|--build)
  arg="$arg --build"
  shift # past argument
  ;;
  --default)
  DEFAULT=YES
  ;;
  *)
  # unknown option
  ;;
esac
shift # past argument or value
done

docker-compose -f ./0compose/docker-compose.dev.yml $arg "${@}"
