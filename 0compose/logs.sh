#!/bin/bash
# https://github.com/vigneshwaranr/bd/blob/master/bd

docker-compose -f ./0compose/docker-compose.dev.yml logs -f  "${@}"
