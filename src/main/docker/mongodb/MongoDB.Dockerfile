FROM mongo:7.0.0
ADD mongodb/scripts/init_replicaset.js init_replicaset.js
