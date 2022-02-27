FROM mongo:4.4.12
ADD mongodb/scripts/init_replicaset.js init_replicaset.js
