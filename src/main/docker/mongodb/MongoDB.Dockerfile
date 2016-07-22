FROM mongo:3.3.9
ADD mongodb/scripts/init_replicaset.js init_replicaset.js
