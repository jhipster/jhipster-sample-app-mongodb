FROM mongo:8.0.3
ADD mongodb/scripts/init_replicaset.js init_replicaset.js
