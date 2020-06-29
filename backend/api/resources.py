from tastypie.resources import ModelResource, ALL_WITH_RELATIONS
from tastypie import fields
from api.models import User , Description
from tastypie.authorization import Authorization

class UserResource(ModelResource):
    class Meta:
        queryset = User.objects.all()
        resource_name = 'user'
        authorization = Authorization()

class DescriptionResource(ModelResource):
    user = fields.ForeignKey(UserResource , 'user')
    class Meta:
        queryset = Description.objects.all()
        resource_name = 'description'
        authorization = Authorization()
        fields = ['skill', 'description']
        filtering = {
            'user': ALL_WITH_RELATIONS
        }