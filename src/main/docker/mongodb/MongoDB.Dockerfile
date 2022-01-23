FROM mongo:4.4.11
ADD mongodb/scripts/init_replicaset.js init_replicaset.js
