FROM mongo:8.2.2
ADD mongodb/scripts/init_replicaset.js init_replicaset.js
