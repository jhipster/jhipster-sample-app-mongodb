FROM mongo:8.0.0
ADD mongodb/scripts/init_replicaset.js init_replicaset.js
