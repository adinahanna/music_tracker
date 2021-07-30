from rest_framework import serializers
from .models import Record

class RecordSerializer(serializers.HyperlinkedModelSerializer):
    title_url = serializers.ModelSerializer.serializer_url_field(
        view_name='record_detail')
    class Meta:
        model = Record
        fields = ('title', 'title_url', 'artist')