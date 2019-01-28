#!/bin/sh
docker-compose exec -e PRISMA_MANAGEMENT_API_SECRET=summus back yarn prisma delete
