FROM mongo:8.3.11
ADD mongodb/scripts/init_replicaset.js init_replicaset.js
