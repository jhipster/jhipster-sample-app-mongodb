FROM mongo:8.0.6
ADD mongodb/scripts/init_replicaset.js init_replicaset.js
