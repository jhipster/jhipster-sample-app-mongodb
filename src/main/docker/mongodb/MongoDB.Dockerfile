FROM mongo:3.3.12
ADD mongodb/scripts/init_replicaset.js init_replicaset.js
