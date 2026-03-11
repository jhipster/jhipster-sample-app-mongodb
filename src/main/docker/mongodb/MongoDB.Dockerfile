FROM mongo:8.2.5
ADD mongodb/scripts/init_replicaset.js init_replicaset.js
