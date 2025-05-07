FROM mongo:8.0.9
ADD mongodb/scripts/init_replicaset.js init_replicaset.js
